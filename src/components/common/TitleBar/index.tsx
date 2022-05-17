import {Box, Typography} from "@mui/material";

interface TitleBarProps {
    readonly title: string;
}

export const TitleBar = (props: TitleBarProps) => {
    return (
        <Box>
            <Typography variant={"h2"}>{props.title}</Typography>
        </Box>
    );
};
