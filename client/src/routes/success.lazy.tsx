import { createLazyFileRoute } from '@tanstack/react-router'
import SuccessLayout from '../layout/SuccessLayout'

export const Route = createLazyFileRoute('/success')({
  component: () => <SuccessLayout />
})