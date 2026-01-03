import axios from "axios";
import type { Character } from "../models/character.model";
import { loadAbort } from "../utilities/loadAbot.utilities";
import type { useApiCall } from "../models/useapi.model";
const BASE_URL = "https://rickandmortyapi.com/api"
export const getCharacter = (id: number): useApiCall<Character> => {
    const controller = loadAbort()
    return { call: axios.get<Character>(`${BASE_URL}/character/${id}`, { signal: controller.signal }), controller }
}

export const newCharacter = (character: Character): useApiCall<Character> => {
    const controller = loadAbort()
    return { call: axios.post<Character>(`${BASE_URL}/character`, { signal: controller.signal }), controller }
}