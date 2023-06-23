import { css } from "@emotion/react";
import {
  ElevatedButton,
  FilledButton,
  OutlinedButton,
  TextButton,
  TonalButton,
} from "@ureca-corp/ui-kit";

export default function Home() {
  return (
    <div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 24px;

          padding: 20px;
        `}
      >
        <div
          css={css`
            display: flex;
            gap: 24px;
          `}
        >
          <TextButton variant={"primary"}>{"Label"}</TextButton>
          <TextButton variant={"secondary"}>{"Label"}</TextButton>
          <TextButton variant={"tertiary"}>{"Label"}</TextButton>
          <TextButton variant={"warning"}>{"Label"}</TextButton>
          <TextButton variant={"error"}>{"Label"}</TextButton>
          <TextButton variant={"error"} disabled>
            {"Label"}
          </TextButton>
        </div>

        <div
          css={css`
            display: flex;
            gap: 24px;
          `}
        >
          <OutlinedButton variant={"primary"}>{"Label"}</OutlinedButton>
          <OutlinedButton variant={"secondary"}>{"Label"}</OutlinedButton>
          <OutlinedButton variant={"tertiary"}>{"Label"}</OutlinedButton>
          <OutlinedButton variant={"warning"}>{"Label"}</OutlinedButton>
          <OutlinedButton variant={"error"}>{"Label"}</OutlinedButton>
          <OutlinedButton variant={"error"} disabled>
            {"Label"}
          </OutlinedButton>
        </div>

        <div
          css={css`
            display: flex;
            gap: 24px;
          `}
        >
          <TonalButton variant={"primary"}>{"Label"}</TonalButton>
          <TonalButton variant={"secondary"}>{"Label"}</TonalButton>
          <TonalButton variant={"tertiary"}>{"Label"}</TonalButton>
          <TonalButton variant={"warning"}>{"Label"}</TonalButton>
          <TonalButton variant={"error"}>{"Label"}</TonalButton>
          <TonalButton variant={"error"} disabled>
            {"Label"}
          </TonalButton>
        </div>

        <div
          css={css`
            display: flex;
            gap: 24px;
          `}
        >
          <FilledButton variant={"primary"}>{"Label"}</FilledButton>
          <FilledButton variant={"secondary"}>{"Label"}</FilledButton>
          <FilledButton variant={"tertiary"}>{"Label"}</FilledButton>
          <FilledButton variant={"warning"}>{"Label"}</FilledButton>
          <FilledButton variant={"error"}>{"Label"}</FilledButton>
          <FilledButton variant={"error"} disabled>
            {"Label"}
          </FilledButton>
        </div>

        <div
          css={css`
            display: flex;
            gap: 24px;
          `}
        >
          <ElevatedButton variant={"primary"}>{"Label"}</ElevatedButton>
          <ElevatedButton variant={"secondary"}>{"Label"}</ElevatedButton>
          <ElevatedButton variant={"tertiary"}>{"Label"}</ElevatedButton>
          <ElevatedButton variant={"warning"}>{"Label"}</ElevatedButton>
          <ElevatedButton variant={"error"}>{"Label"}</ElevatedButton>
          <ElevatedButton variant={"error"} disabled>
            {"Label"}
          </ElevatedButton>
        </div>
      </div>
    </div>
  );
}
