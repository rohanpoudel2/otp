import { create } from "zustand";

export type codeError = { [key: number]: { message: string, status: boolean } }

interface useOtpPins {
  initialiseCodeLength: (length: number) => void,
  length: number,
  code: string[],
  setCode: (code: string[]) => void,
  error: codeError,
  setError: (error: codeError) => void
}

export const useOtpPins = create<useOtpPins>((set) => ({
  initialiseCodeLength: (length: number) => set({ code: Array(length).fill(''), length }),
  length: 6,
  code: Array(6).fill(''),
  setCode: (code: string[]) => set({ code }),
  error: {},
  setError: (error: codeError) => set({ error })
}))