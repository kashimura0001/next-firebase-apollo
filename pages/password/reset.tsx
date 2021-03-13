import React, { VFC, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Flex, Box, Button, Text } from "@chakra-ui/react";
import Link from "next/link";

const PasswordReset: VFC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // TODO: パスワードリセット処理を実装する
    alert("hoge");
  };

  return (
    <Flex w="full" align="center" justifyContent="center">
      <Box w="320px" mt="120px">
        <Box textAlign="center">
          <Text fontSize="2xl">パスワードをリセット</Text>
        </Box>
        <Box mt={10} textAlign="left" w="100%">
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel fontSize="sm">メールアドレス</FormLabel>
              <Input
                type="email"
                size="lg"
                placeholder="メールアドレス"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                backgroundColor="gray.100"
              />
            </FormControl>
            <Button
              type="submit"
              size="lg"
              colorScheme="blue"
              mt={12}
              width="full"
              variant="outline"
            >
              送信する
            </Button>
            <Box textAlign="center" mt={8}>
              <Link href="/login">
                <Button color="blue.500" variant="link" fontWeight={400}>
                  戻る
                </Button>
              </Link>
            </Box>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default PasswordReset;
