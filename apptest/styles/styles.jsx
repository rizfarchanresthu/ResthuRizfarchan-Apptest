import { css } from '@emotion/css'

const Styles = {
    Container: css({
        background: 'whitesmoke'
    }),
    List: {
        Title: css({
            display: 'flex',
            justifyContent: 'center',
        }),
        Container: css({
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
        }),
        ContainerContact: css({
            display: 'flex',
            flexDirection: 'column',
            borderBottom: "2px solid black",
            margin: '1rem 2rem',
            paddingBottom: '10px',
            alignItems: 'center',
            width: 'fit-content'
        }),
        ContainerName: css({
            
        }),
        ContainerPhoto: css({
           
        }),
        Name: css({

        }),
        Photo: css({
            width: 200,
            height: 200,
            borderRadius: 10,
            objectFit: 'cover'
        }),
        NoImage: css({
            width: 200,
            height: 200,
            borderRadius: 10,
            objectFit: 'cover',
            background: "url('https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg') no-repeat center hsl(0, 0%, 80%)",
        })
    },
    Button: {
        ButtonAdd: css({
            borderRadius: 2,
            border: "1px solid grey",
            width: 'fit-content',
            paddingBottom: 5,
            paddingRight: 5,
            paddingLeft: 5,
            paddingTop: 5,
            marginLeft: 20,
            fontWeight: 'bold',
            color: 'white',
            background: 'CornflowerBlue',
        }),
        ButtonDetail: css({
            cursor: 'pointer'
        })
    }
}

export default Styles