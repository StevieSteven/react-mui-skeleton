import {AppBar, Button, Container, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import {MouseEventHandler, ReactNode, useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

interface MainLayoutProps {
    readonly children: ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
    const navigate = useNavigate();
    return (
        <div>
            <AppBar position={"static"}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => navigate("/")}>
                        React skeleton app
                    </Typography>
                    <LngButton/>
                </Toolbar>
            </AppBar>
            <Container>
                {props.children}
            </Container>
        </div>
    );
};

const LngButton = () => {
    const {i18n} = useTranslation();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => setAnchorEl(event.currentTarget);
    const changeLng = (code: string) => {
        i18n.changeLanguage(code);
        setAnchorEl(null);
    }


    return (
        <div>
            <Button
                color={"inherit"}
                id="lng-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
               change language
            </Button>
            <Menu
                id="lng-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={changeLng}
                MenuListProps={{
                    'aria-labelledby': 'lng-button',
                }}
            >
                <MenuItem onClick={() => changeLng("en")}>english</MenuItem>
                <MenuItem onClick={() => changeLng("es")}>español</MenuItem>
                <MenuItem onClick={() => changeLng("de")}>deutsch</MenuItem>
                <MenuItem onClick={() => changeLng("zh")}>chinese</MenuItem>
            </Menu>
        </div>
    );
};
