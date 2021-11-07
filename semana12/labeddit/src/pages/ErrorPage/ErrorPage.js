import React from "react";
import Typography from '@material-ui/core/Typography'
import { ErrorImage, ErrorPageContainer } from './styled'
import error from "../../assets/error-page.svg"

const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <ErrorImage src={error} />
            <Typography color={'primary'} variant={'h4'} align={'center'}>Erro 404 - Página Não Encontrada</Typography>
        </ErrorPageContainer>
    )
}

export default ErrorPage;