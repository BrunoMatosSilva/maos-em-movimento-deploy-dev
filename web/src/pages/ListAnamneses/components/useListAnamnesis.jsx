import dayjs from "dayjs";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function useListAnamnesis(dateOfCreated) {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const {id} = useParams();
  const date = dateOfCreated;
  const newDate = dayjs(date).format('DD/MM/YYYY');
  const navigate = useNavigate();

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
  }

  function handleDeletePacient() {
    setIsDeleteModalVisible(true);
  }

  return {
    id,
    newDate,
    navigate,
    isDeleteModalVisible,
    setIsDeleteModalVisible,
    handleCloseDeleteModal,
    handleDeletePacient,
  }
}
