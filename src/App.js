import React, { useEffect, useState } from "react";
import { Box, Select, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";

function App(props) {
  const [employeeIdList, setEmployeeIdList] = useState([]);
  const [employeeId, setEmployeeId] = useState(0);
  const [employee, setEmployee] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 직원 리스트 옵션에 넣기 첫 랜딩시에만
    axios
      .get("/api/main1/sub7")
      .then((response) => setEmployeeIdList(response.data));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/main1/sub5?id=" + employeeId)
      .then((response) => response.data)
      .then((data) => setEmployee(data))
      .finally(() => setIsLoading(false));
  }, [employeeId]);

  let textContent = null;

  if (isLoading) {
    textContent = <Spinner />;
  } else {
    if (employee === null) {
      textContent = <Text>다른 직원 번호를 선택해주세요.</Text>;
    } else {
      textContent = (
        <Text>
          {employee.lastName} {employee.firstName}
        </Text>
      );
    }
  }

  return (
    // 직원 번호를 선택하면 직원의 이름이 출력
    // /api/main1/sub5?id=5
    // spring boot의 메소드도 작성하기
    <div>
      <Select
        placeholder="직원 번호"
        onChange={(e) => setEmployeeId(e.target.value)}
      >
        {employeeIdList.map((id) => (
          <option value={id}>{id}</option>
        ))}
      </Select>

      <Box>{textContent}</Box>
    </div>
  );
}

export default App;
