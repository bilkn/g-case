import { ChipProps } from "@mui/material";
import { theme } from "../../../styles/theme";
import { StyledChip } from "./style";

interface CustomChipProps extends ChipProps {
  active?: boolean;
}

function CustomChip(props: CustomChipProps) {
  const { active, ...rest } = props;
  return (
    <StyledChip
      active={active}
      sx={{
        background: active
          ? theme.palette.primary.main
          : theme.palette.secondary.main,
        color: active
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
        borderRadius: "2px",
        fontSize: "1.3rem",
        fontWeight: 600,
        lineHeight: "18px",
      }}
      {...rest}
    />
  );
}

export default CustomChip;
