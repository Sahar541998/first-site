import {useQuery} from "react-query";
import {LoginResponse} from "server-shared-types"


export const loginUser = async (userName: string, userPassword: string): Promise<LoginResponse> => {
    return (await fetch('http://localhost:3030/login')).json()
}

const useLogin = (userName: string, password: string) => {
    return useQuery({
        queryKey: ['loginUser', userName, password],
        queryFn: () => loginUser(userName, password),
    })
}

export default useLogin