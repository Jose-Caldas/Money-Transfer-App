import * as S from "./styled";
import { FiCheck } from "react-icons/fi";
import { useStore } from "../context/store";

export type PlansProps = {
  date: string;
  planType: string;
  price: number;
  id: string;
  value: string;
  htmlFor: string;
};

function Plans({ date, planType, price, id, value, htmlFor }: PlansProps) {
  const changeConversionRate = useStore((state) => state.changeConversionRate);
  const changePlan = useStore((state) => state.changePlan);

  const handleChange = () => {
    changeConversionRate(price);
    changePlan(planType);
  };

  return (
    <S.Container onClick={handleChange} title={`Plan: ${planType}`}>
      <S.Content>
        <S.Input type="radio" id={id} name="contact" value={value} />
        <S.Label htmlFor={htmlFor}>
          <S.Box>
            <S.IconWrapper>
              <span>
                <FiCheck />
              </span>
            </S.IconWrapper>
            <S.InfoPlan>
              <p>Get {date}</p>
              <h2>{planType}</h2>
            </S.InfoPlan>
          </S.Box>
          <h3>$ {price}</h3>
        </S.Label>
      </S.Content>
    </S.Container>
  );
}

export default Plans;
