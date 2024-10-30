import Link from "next/link";
import { Tooltip, IconButton } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';

export default function AccountIcon() {
  return (
    <>
      <Tooltip title="Settings">
        <IconButton size="small" sx={{ ml: 2 }} style={{ color: "var(--font1-color)" }}>
          <Link href="/settings">
            <SettingsIcon color="var(--font1-color)" />
          </Link>
        </IconButton>
      </Tooltip>
    </>
  );
}
