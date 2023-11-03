import { Button } from "@chakra-ui/react";

export function MyLink({ to, children }) {
  return (
    <div>
      <Button as="a" href={to} colorScheme="orange">
        {children}
      </Button>
    </div>
  );
}
