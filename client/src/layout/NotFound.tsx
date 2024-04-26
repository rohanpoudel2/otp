import { useNavigate } from "@tanstack/react-router";
import ScreenLayout from './ScreenLayout'
import BoxContainer from '../components/BoxContainer'
import Title from '../components/Title'
import Button from "../components/Button";

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <ScreenLayout>
      <BoxContainer>
        <Title
          title="Route Not Found 😵"
          className="font-mono font-semibold mb-5"
        />
        <Button onClick={() => navigate({ to: '/' })}>
          Go Back
        </Button>
      </BoxContainer>
    </ScreenLayout>
  )
}

export default NotFound