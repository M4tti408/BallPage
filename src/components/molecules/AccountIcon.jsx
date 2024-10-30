import Link from "next/link";
import { Tooltip, IconButton } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';

export default function AccountIcon() {
    return (
        <Tooltip title="Settings">
            <Link href="/settings" passHref>
                <IconButton size="small" sx={{ ml: 2 }} style={{ color: "var(--font1-color)" }}>
                    <SettingsIcon />
                </IconButton>
            </Link>
        </Tooltip>
    );
}
