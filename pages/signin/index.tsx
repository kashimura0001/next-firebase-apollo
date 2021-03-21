import React, { VFC, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Flex, Box, Button, Text } from "@chakra-ui/react";
import { PasswordInput } from "../../components/PasswordInput";
import Link from "next/link";
import { Route } from "../../config/routes";
import { useAuth } from "../../hooks/useAuth";
import Router from "next/router";

const SignIn: VFC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInEmail } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signInEmail(email, password);
    // TODO: サインインの処理を書く、遷移先を変更する
    await Router.push(Route.ONBOARDING);
  };

  return (
    <Flex w="full" align="center" justifyContent="center">
      <Box w="320px" mt="120px">
        <Box textAlign="center">
          <Text fontSize="2xl">ログイン</Text>
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
            <FormControl isRequired mt={8}>
              <FormLabel fontSize="sm">パスワード</FormLabel>
              <PasswordInput
                placeholder="パスワード"
                size="lg"
                value={password}
                backgroundColor="gray.100"
                onChange={(e) => setPassword(e.target.value)}
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
              ログイン
            </Button>
            <Box textAlign="center" mt={8}>
              <Link href={Route.PASSWORD_NEW}>
                <Button color="blue.500" variant="link" fontWeight={400}>
                  パスワードをお忘れの方はこちら
                </Button>
              </Link>
            </Box>
            <Box textAlign="center" mt={4}>
              <Link href={Route.SIGN_UP}>
                <Button color="blue.500" variant="link" fontWeight={400}>
                  未登録の方はこちら
                </Button>
              </Link>
            </Box>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default SignIn;
