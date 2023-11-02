import { Button } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Button colorScheme="messenger">lorem.</Button>
      <Button colorScheme="red">Lorem.</Button>
      <Button colorScheme="yellow">A.</Button>
      <Button colorScheme="orange">Tempore!</Button>
      <Button colorScheme="teal" size={"sm"}>
        Architecto.
      </Button>
      <Button colorScheme="blackAlpha" size={"lg"}>
        Nemo.
      </Button>
      <Button colorScheme="green" variant={"outline"}>
        Atque!
      </Button>
      <Button colorScheme="orange" variant={"ghost"}>
        Suscipit?
      </Button>
      <Button colorScheme="cyan" variant={"link"}>
        4Obcaecati?
      </Button>
      <Button leftIcon={<EmailIcon />}>Laudantium?</Button>
      <Button isLoading>Distinctio.</Button>
      <Button isLoading loadingText={"전송중"}>
        Exercitationem!
      </Button>
      <Button rightIcon={<PhoneIcon />}>Ipsam?</Button>
      <Button>Aliquam!</Button>
      <Button>Quia.</Button>
      <Button>Officiis!</Button>
      <Button>Error!</Button>
      <Button>Amet!</Button>
      <Button>Maiores!</Button>
      <Button>Ex?</Button>
      <Button>Similique?</Button>
      <Button>Dolorum.</Button>
      <Button>Quam?</Button>
      <Button>Ratione.</Button>
      <Button>Modi?</Button>
      <Button>Culpa!</Button>
      <Button>Repellendus?</Button>
      <Button>Officiis?</Button>
      <Button>Fuga!</Button>
      <Button>Natus?</Button>
      <Button>Quas.</Button>
    </>
  );
}

export default App;
