import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AnamneseServices } from "../../services/AnamneseService";

export default function useListAnamneses() {
  const {id} = useParams();
  const [anamnesis, setAnamnesis] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const qtyOfAnamnesis = anamnesis.length < 1;

  useEffect(() => {
    setIsLoading(true);

    AnamneseServices.getAnamnese(id).then(response => {
      setAnamnesis(response.data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log('erro', error);
    })
    .finally(() => {
      setIsLoading(false);
    })
  },[]);

  return {
    isLoading,
    anamnesis,
    qtyOfAnamnesis
  }
}