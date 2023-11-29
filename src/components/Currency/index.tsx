import * as S from './styled'

import { FiRefreshCcw } from 'react-icons/fi'
import { Select } from 'antd'

import { useCurrencies } from '../context/useCurrencies'
import { useStore } from '../context/store'
import { convert } from 'cashify'
import { rates } from '../../mocks/rates'

import { useEffect } from 'react'
const { Option } = Select

function Currencies() {
  const store = useStore((state) => state)

  const { currencies } = useCurrencies()

  const handleFromAmountChange = (e) => {
    if (e.target.value >= 0) {
      store.setFromAmount(e.target.value)
    }
  }

  localStorage.setItem('store', JSON.stringify(store.toAmount))
  const data = localStorage.getItem('store')
  console.log(data)

  const result = convert(store.fromAmount, {
    from: store.from,
    to: store.to,
    base: store.base,
    rates,
  })

  useEffect(() => {
    store.setToAmount(Number(result.toFixed(2)))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result])

  function refresh() {
    store.setFrom(store.to)
    store.setTo(store.from)
  }

  return (
    <S.Container>
      <S.Content>
        <S.Wrapper>
          <S.SelectContainer>
            <label>From:</label>
            <Select
              placeholder="Select a country"
              value={store.from}
              onChange={(value) => store.setFrom(value)}
              bordered={false}
              style={{
                width: '100%',
                display: 'flex',
                gap: 16,
              }}
            >
              {currencies.map((currency) => (
                <Option
                  key={currency.id}
                  value={currency.value}
                  id={currency.id}
                  flag={currency.flag}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={currency.flag}
                      alt=""
                      style={{ width: 30, height: 30, marginRight: 16 }}
                    />
                    {currency.label}
                  </div>
                </Option>
              ))}
            </Select>
          </S.SelectContainer>
          <S.Transfer>
            <p>You send</p>
            <S.InputContainer>
              <input
                type="number"
                min="1"
                step="any"
                value={store.fromAmount}
                onChange={handleFromAmountChange}
                title="Choose a value to send "
              />
              <span>{store.from}</span>
            </S.InputContainer>
          </S.Transfer>
        </S.Wrapper>
        <S.ButtonWrapper>
          <S.Refresh>
            <FiRefreshCcw
              size={24}
              color="var(--pink100)"
              onClick={refresh}
              title="Invert Send"
            />
          </S.Refresh>
        </S.ButtonWrapper>
        <S.Wrapper>
          <S.SelectContainer>
            <label>To:</label>
            <Select
              placeholder="Select a country"
              value={store.to}
              onChange={(value) => store.setTo(value)}
              bordered={false}
              style={{
                width: '100%',
                display: 'flex',
                gap: 16,
              }}
            >
              {currencies.map((currency) => (
                <Option
                  style={{
                    fontSize: 15,
                  }}
                  key={currency.id}
                  value={currency.value}
                  id={currency.id}
                  flag={currency.flag}
                >
                  <img
                    src={currency.flag}
                    alt=""
                    style={{ width: 30, height: 30, marginRight: 16 }}
                  />
                  {currency.label}
                </Option>
              ))}
            </Select>
          </S.SelectContainer>
          <S.Transfer>
            <p>Recipient gets</p>
            <S.InputContainer>
              <input
                className="toAmount"
                type="number"
                min="1"
                step="any"
                value={store.toAmount}
                onChange={() => {}}
              />
              <span>{store.to}</span>
            </S.InputContainer>
          </S.Transfer>
        </S.Wrapper>
      </S.Content>
    </S.Container>
  )
}

export default Currencies
