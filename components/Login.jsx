import { Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import GoogleIcon from '@mui/icons-material/Google';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { signIn, useSession, signOut } from "next-auth/react";

export default function App() {
    const [boxActive, setBoxActive] = useState(true)
    const [session] = useState(false)
    const { data, status } = useSession();

    return (
        <Flex position={'relative'}>
            <Flex w={'45px'} h='45px' me='5px' borderRadius={'50%'} bg='mainColors.200' alignItems={'center'} justifyContent='center' boxShadow={boxActive && '0px 4px 3px #606060'} onClick={() => setBoxActive(v => !v)}>
                <Text fontSize={'15px'} fontWeight='bold' color={'mainColors.300'}>{data && data.user ? obtenerIniciales(data.user.name) : <GoogleIcon />}</Text>
            </Flex>
            {
                boxActive &&
                <Flex position={'fixed'} w='150px' h='200px' bg={'mainColors.200'} right='8' top={'42'} boxShadow={'2xl'} borderRadius='25px 0 25px 25px' alignItems={'end'} flexDir={'column'}>
                    <Flex me={'10px'} mt='20px'>
                        <Text color={'mainColors.300'}>Mis recetas</Text>
                        <Text color={'mainColors.300'}><ListAltIcon /></Text>
                    </Flex>
                    {
                        status === 'authenticated' ?
                            <Flex me={'10px'} mt='20px' onClick={() => signOut()}>
                                <Text color={'mainColors.300'}>Cerrar sesion</Text>
                                <Text color={'mainColors.300'}><LogoutIcon /></Text>
                            </Flex>
                            :
                            <Flex me={'10px'} mt='20px'>
                                <Text color={'mainColors.300'} onClick={() => signIn("google")}>Iniciar sesion</Text>
                                <Text color={'mainColors.300'}><GoogleIcon /></Text>
                            </Flex>
                    }
                </Flex>
            }
        </Flex>
    );
}

function obtenerIniciales(nombreCompleto) {
    const partesNombre = nombreCompleto.split(' ');
    const inicialNombre = partesNombre[0].charAt(0);
    const inicialApellido = partesNombre[1].charAt(0);
    return inicialNombre + inicialApellido;
}
