import { useWeb3} from '@/contexts/Web3Context';
import { Box, Text } from '@chakra-ui/react';
import { useEffect } from 'react';

function Test() {
    useEffect(() => {
        setLoaded(true);
    }, []);
    
    const {address, setLoaded} = useWeb3();

    return (
        <Box>
            <Text>Account: {address}</Text>
        </Box>

    );
}

export default Test;
