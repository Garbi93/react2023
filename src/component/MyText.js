import React, { useContext } from "react";
import { Text } from "@chakra-ui/react";
import { TextContext } from "../App";

export function MyText() {
  // 3. 객체를 구조분해 할당 하여 받아서 입맛에 맞게 사용하기
  const { text } = useContext(TextContext);
  return <Text>{text}</Text>;
}
