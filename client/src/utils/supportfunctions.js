import { deleteObject, ref } from "firebase/storage";
import { storage } from "../config/firebase.config";

export const filters = [
  { id: 2, name: "Jazz", value: "jazz" },
  { id: 3, name: "Rock", value: "rock" },
  { id: 4, name: "Melody", value: "melody" },
  { id: 5, name: "Karaoke", value: "karaoke" },
];

export const filterByLanguage = [
  { id: 1, name: "Tamil", value: "tamil" },
  { id: 2, name: "English", value: "english" },
  { id: 3, name: "Malayalam", value: "malayalam" },
  { id: 4, name: "Telungu", value: "Telungu" },
  { id: 5, name: "Hindi", value: "hindi" },
];

export const deleteAnObject = (referenceUrl) => {
  const deleteRef = ref(storage, referenceUrl);
  deleteObject(deleteRef)
    .then(() => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};
