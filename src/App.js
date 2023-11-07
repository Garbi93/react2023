import React from "react";
import { useImmer } from "use-immer";
import { Box, Button, ListItem, UnorderedList } from "@chakra-ui/react";

let nextId = 1;
function App(props) {
  const [items, updateItems] = useImmer([]);

  function handleButtonClick(todo) {
    updateItems((draft) => {
      draft.push({ id: nextId++, done: false, text: todo });
    });
  }

  function handleDoneButtonClick(id) {
    // updateItems((draft) => {
    //   const index = draft.findIndex((item) => item.id === id);
    //   if (index !== -1) {
    //     draft[index].done = true;
    //   }
    // });

    // 선생님 버젼
    console.log(id);
    console.log(items);
    // 배열 깊은 복사 -> immer로 사용
    updateItems((draft) => {
      // immer를 사용 했으면 얕은 복사로 사용 해도 깊은 복사가 이루어짐
      const target = draft.find((e) => e.id === id);
      target.done = true;
    });
  }

  return (
    <div>
      <Button onClick={() => handleButtonClick("자바공부")}>자바공부</Button>
      <Button onClick={() => handleButtonClick("점심먹기")}>점심먹기</Button>
      <Button onClick={() => handleButtonClick("잠자기")}>잠자기</Button>

      <Box>
        <UnorderedList>
          {items.map((item) => (
            <ListItem
              key={item.id}
              textDecoration={item.done ? "line-through" : "none"}
            >
              {item.text}
              <Button onClick={() => handleDoneButtonClick(item.id)}>
                완료
              </Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </div>
  );
}

export default App;
