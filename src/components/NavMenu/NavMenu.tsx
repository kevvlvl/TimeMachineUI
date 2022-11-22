import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';

function NavMenu() {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleMenuClick = (menuItem: string, e: React.MouseEvent) => {

        console.log('Clicked Menu Item: ', menuItem);
        // TODO: set state and render different components
        // TODO: Create ProductItem component, a list component, and the cart which shows the product list
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        TMUI-KEVVLVL
                    </Typography>

                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Button
                            key="Products"
                            onClick={(e) => handleMenuClick('product', e)}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Products
                        </Button>

                        <Button
                            key="Cart"
                            onClick={(e) => handleMenuClick('cart', e)}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Cart
                        </Button>

                        <Button
                            key="Status"
                            onClick={(e) => handleMenuClick('status', e)}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Status
                        </Button>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavMenu;