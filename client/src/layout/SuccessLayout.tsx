import Button from "../components/Button"
import Title from "../components/Title"
import { useNavigate } from "@tanstack/react-router";
import ScreenLayout from "./ScreenLayout";
import BoxContainer from "../components/BoxContainer";

const SuccessLayout = () => {
  const navigate = useNavigate()

  return (
    <ScreenLayout>
      <BoxContainer>
        <Title
          title="OTP Verified Successfully 🎉"
          className="font-mono font-semibold mb-5"
        />
        <Button onClick={() => navigate({ to: '/' })}>
          Go Back
        </Button>
      </BoxContainer>
    </ScreenLayout>
  )
}

export default SuccessLayout