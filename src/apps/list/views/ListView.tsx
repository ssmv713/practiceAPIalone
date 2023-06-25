import { css } from "@emotion/react";
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const models = [
  { name: "Simmy Shim", email: "sshim@example.com", phone: "123-1234-1234" },
];

export const ListView = () => {
  return (
    <Stack css={st.root}>
      <p>혼자 목록 연습하기</p>
      <TableContainer>
        <Table>
          <TableHead css={st.table_head}>
            <TableRow>
              <TableCell>{"번호"}</TableCell>
              <TableCell>{"이름"}</TableCell>
              <TableCell>{"이메일"}</TableCell>
              <TableCell>{"전화번호"}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {models.map((member, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>{member.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

const st = {
  root: css`
    padding: 20px;

    p {
      font-size: 20px;
    }
  `,

  table_head: css`
    background-color: #00aeff74;
  `,
};
