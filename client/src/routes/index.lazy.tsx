import { createLazyFileRoute } from '@tanstack/react-router'
import OTPLayout from '../layout/OTPLayout'

export const Route = createLazyFileRoute('/')({
  component: () => <OTPLayout />
})