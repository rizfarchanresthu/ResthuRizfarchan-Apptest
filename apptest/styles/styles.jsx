import { css } from '@emotion/css'

const Styles = {
    Container: css({

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
            display: 'flex',
            alignItems: 'center'
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
    Add:{
        ContainerForm: css({
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
        }),
        Form: css({
            display: 'flex',
            flexDirection: 'column',
            margin: '1rem 2rem',
            paddingBottom: '10px',
            alignItems: 'center',
            width: 'fit-content'
        }),
        InputContainer: css({
            display: 'flex',
            justifyContent: 'space-between',
            alignSelf: 'flex-end'
        }),
        Label: css({
            display: 'flex',
            marginRight: 40
        }),
        Input: css({
            display: 'flex',
            width: 150,
            height:32,
            borderRadius: 5,
            marginBottom: 10
        })
    },
    Button: {
        ButtonAdd: css({
            borderRadius: 5,
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
        ButtonAddDisabled: css({
            borderRadius: 5,
            border: "1px solid grey",
            width: 'fit-content',
            paddingBottom: 5,
            paddingRight: 5,
            paddingLeft: 5,
            paddingTop: 5,
            marginLeft: 20,
            fontWeight: 'bold',
            color: 'grey',
            background: '#d1dffa',
        }),
        ButtonDetail: css({
            borderRadius: 5,
            border: "1px solid grey",
            cursor: 'pointer',
            paddingBottom: 5,
            paddingRight: 5,
            paddingLeft: 5,
            paddingTop: 5,
            marginTop: 5
        }),
        ButtonDelete: css({
            borderRadius: 5,
            border: "1px solid grey",
            cursor: 'pointer',
            background: 'darkred',
            color:'white',
            paddingBottom: 5,
            paddingRight: 5,
            paddingLeft: 5,
            paddingTop: 5,
            marginLeft: 10,
            marginTop: 5
        }),
        ButtonHeader: css({
            marginRight: 30,
            fontWeight: 'bold',
            color: 'white',
            ':hover': {
                textDecoration: 'underline'
            }
        })
    },
    Header: {
        Desktop: css({
            background: 'grey',
            paddingBottom: 10,
            paddingTop: 10,
            paddingLeft: 40,
            "@media(max-width:768px)": {
                display:'none'
            }
        }),
        Mobile: css({
            background: 'grey',
            paddingBottom: 10,
            paddingTop: 10,
            paddingLeft: 20,
            height: 70,
            "@media(min-width:768px)": {
                display: 'none',
            }
        }),
        ContainerMobile: css({
            display: 'flex',

        }),
        ContainerTitle: css({
            marginLeft: 50
        }),
    },
    Footer: {
        Primary: css({
            display: 'inline-block',
            paddingRight: 10,
            paddingLeft: 10,
            "@media(max-width:768px)": {
                marginBottom: 100
            }
        }),
        Mobile: css({
            background: 'grey',
            paddingBottom: 10,
            paddingTop: 10,
            paddingLeft: 20,
            height: 70,
            zIndex: 100,
            position: 'fixed',
            bottom: 0,
            width: '100%',
            "@media(min-width:768px)": {
                display: 'none!important',
            }
        }),
        ContainerMobile: css({
            display: 'flex',
            justifyContent: 'space-evenly'
        }),
    }
}

export default Styles