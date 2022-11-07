import React, {useState, useEffect} from 'react';
import MyButton from "../UI/MyButton/MyButton";
import './ProjectForm.css';
import ButtonPlus from "../../img/plus.png";
import ButtonMinus from "../../img/minus.png";
import Comp1 from "../../img/spec/comp1.svg"
import OutlinedInput from '@mui/material/OutlinedInput';
import {FormControl, Grid, IconButton, InputAdornment, InputBase, InputLabel, MenuItem, Select} from "@mui/material";
import NearMeIcon from '@mui/icons-material/NearMe';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { alpha, styled } from '@mui/material/styles';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';


const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
    '& .MuiFilledInput-root': {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&.Mui-focused': {
            backgroundColor: 'transparent',
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
        },
    },
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 'auto',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));


const data = [
    {
        id: 1,
        name: 'SOUND',
        models: [
            {
                id: 1,
                name: 'Звукорежиссер',
            },
            {
                id: 2,
                name: 'RF менеджер',
            },
            {
                id: 3,
                name: 'Backline',
            },
            {
                id: 4,
                name: 'Roadie',
            },
            {
                id: 5,
                name: 'Техник по звуку',
            },
        ]
    },
    {
        id: 2,
        name: 'LIGHT',
        models: [
            {
                id: 1,
                name: 'Художник по свету',
            },
            {
                id: 2,
                name: 'Оператор световой пушки',
            },
            {
                id: 3,
                name: 'Гафер',
            },
            {
                id: 4,
                name: 'Техник по свету',
            },
        ]
    },
    {
        id: 3,
        name: 'VIDEO',
        models: [
            {
                id: 1,
                name: 'Инженер VMix',
            },
            {
                id: 2,
                name: 'Инженер Resolume',
            },
            {
                id: 3,
                name: 'Инженер Zoom',
            },
            {
                id: 4,
                name: 'Оператор [сameraman]',
            },
            {
                id: 5,
                name: 'Гафер',
            },
            {
                id: 6,
                name: 'IT-специалист',
            },
            {
                id: 7,
                name: 'Техник монтажа',
            },
        ]
    },
    {
        id: 4,
        name: 'RIGGERS',
        models: [
            {
                id: 1,
                name: 'High Rigger [???]',
            },
            {
                id: 2,
                name: 'Lo Rigger [???]',
            },
        ]
    },
    {
        id: 5,
        name: 'STAGEHANDS',
        models: [
            {
                id: 1,
                name: 'Погрузка / разгрузка',
            },
            {
                id: 2,
                name: 'Монтаж / демонтаж',
            },
        ]
    },
    {
        id: 6,
        name: 'STAGE GROUND',
        models: [
            {
                id: 1,
                name: 'High Rigger [???]',
            },
            {
                id: 2,
                name: 'Lo Rigger [???]',
            },
        ]
    },
    {
        id: 7,
        name: 'TRUCKS',
        models: [
            {
                id: 1,
                name: 'C личным ТС [B]',
            },
            {
                id: 2,
                name: 'Без личного ТС [B]',
            },
            {
                id: 3,
                name: 'С гидролифтом',
            },
            {
                id: 4,
                name: 'Без гидролифта',
            },
            {
                id: 5,
                name: 'Грузоподъемность 4 т.',
            },
            {
                id: 6,
                name: 'Грузоподъемность 6 т.',
            },
            {
                id: 7,
                name: 'Грузоподъемность 7 т.',
            },
            {
                id: 8,
                name: 'Грузоподъемность 8 т.',
            },
            {
                id: 9,
                name: 'Грузоподъемность 10 т.',
            },
            {
                id: 10,
                name: 'Грузоподъемность 14 т.',
            },
        ]
    },
    {
        id: 8,
        name: 'PRODUCTION',
        models: [
            {
                id: 1,
                name: 'Мероприятие под ключ',
            },
            {
                id: 2,
                name: 'Отдельные технические задачи',
            },
        ]
    }
];

// компонент пользовательского выпадающего списка
const CustomSelect = ({ id, options, onChange }) => {
    return (
        <TextField fullWidth
                   id={id}
                   select
                   label="Категория"
                   onChange={onChange}>
            {options.map((option, index) => (
                <MenuItem key={id + index} value={option.id}>
                    {option.name}
                </MenuItem>
            ))}
        </TextField>

    /*<select className="custom-select" id={id} onChange={onChange}>
            { options.map((option, index) =>
                <option key={id + index} value={option.id}>
                    {option.name}
                </option>
            )}
        </select>*/
    )
}


const ProjectForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})
    const [categories, setCategories] = useState([]); // хранилище категорий
    const [models, setModels] = useState([]);         // хранилище моделей

    const addNewProject = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }


    const [value, setValue] = React.useState(dayjs('2022-01-01T0:0:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const componentDidMount = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        });
    }

    // при первой загрузке приложения выполнится код ниже
    useEffect(() => {

        // устанавливаем категории
        setCategories(data.legnth > 0 && data);

        // и модели из первой категории по умолчанию
        setModels(data.length > 0 && data[0].models && data[0].models.length > 0);

    }, []);

    // при выборе нового значения в категории
    const onCategoriesSelectChange = (e) => {

        // преобразуем выбранное значение опции списка в число - идентификатор категории
        const categoryId = parseInt(e.target.options[e.target.selectedIndex].value);

        // получаем из массива категорий объект категории по соответствующему идентификатору
        const category = categories.find(item => item.id === categoryId);

        // выбираем все модели в категории, если таковые есть
        const models = category.models && category.models.length > 0
            ? category.models
            : [{ id: 0, name: 'Нет моделей', items: [] }];

        // меняем модели во втором списке
        setModels(models);
    }

    return (

        <form>
            {/*Управляемы компонент*/}
            {/*
            <div className="text-field text-field_floating">
                <input
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    className="text-field__input"
                    type="text"
                    id="title_post"
                    placeholder="Название проекта"
                />
                <label className="text-field__label" htmlFor="title_post">Название проекта</label>
            </div>

            <div className="text-field text-field_floating">
                <input
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    className="text-field__input"
                    type="text"
                    id="date"
                    placeholder="Дата начала"
                />
                <label className="text-field__label" htmlFor="date">Укажите геолокацию</label>
            </div>
            */}

            <div className="text-field text-field_floating">
                <RedditTextField fullWidth
                    label="Название проекта"
                    defaultValue="react-reddit"
                    id="reddit-input"
                    variant="filled"
                />
            </div>

            <div className="text-field text-field_floating">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={3}>
                        <DateTimePicker
                            label="Дата начала"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>
            </div>

            <div className="text-field text-field_floating">
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Укажите геолокацию</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={<InputAdornment position="end"><NearMeIcon /></InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        onClick={componentDidMount}
                    />

                </FormControl>
            </div>

            <div className="text-field text-field_floating">
                <RedditTextField fullWidth
                    id="outlined-multiline-flexible"
                    label="Техническое задание"
                    multiline
                    rows={4}
                />
            </div>

            <div>
                <label>
                    <p>Добавьте специалистов</p>
                    <div className="text-field text-field_floating">
                        <label htmlFor="category">Категории</label>
                        <CustomSelect
                            id="category"
                            options={data}
                            onChange={onCategoriesSelectChange}
                        />

                    </div>
                    <div>
                        {/*<CustomSelect
                            id="model"
                            options={models}
                        />*/}
                        <TextField fullWidth
                            id="outlined-select-currency"
                            select
                            label="Специальность"
                        >
                            {data.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>

                </label>

                <p style={{marginTop: "15px"}}>
                    Количество
                </p>
                <div className={'kol_group'}>
                    <img src={ButtonMinus} alt='Минус'/>
                    <FormControl sx={{ m: 1, width: '65px' , height: '43px'}} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </FormControl>
                    <img src={ButtonPlus} alt='Плюс'/>
                </div>

                <p><MyButton style={{width: "103px", marginBottom: "15px"}}>Добавить</MyButton></p>
            </div>

            <div className={'list_spec'}>
                <img style={{marginTop: "24px"}} src={Comp1} alt='Comp1'/>

                <FormControl sx={{marginLeft: '10px'}} variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input">
                        Sound
                    </InputLabel>
                    <BootstrapInput defaultValue="Звукорежессер" id="bootstrap-input" />
                </FormControl>

                <FormControl sx={{marginLeft: '5px', width: '35px' }} variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input" />
                    <BootstrapInput defaultValue="1" id="bootstrap-input" />
                </FormControl>

                <DeleteIcon style={{marginBottom: "10px", marginLeft: "10px"}} />
            </div>

            <div className={'list_spec'}>
                <img style={{marginTop: "24px"}} src={Comp1} alt='Comp1'/>

                <FormControl sx={{marginLeft: '10px'}} variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input">
                        Sound
                    </InputLabel>
                    <BootstrapInput defaultValue="Звукорежессер" id="bootstrap-input" />
                </FormControl>

                <FormControl sx={{marginLeft: '5px', width: '35px' }} variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input" />
                    <BootstrapInput defaultValue="1" id="bootstrap-input" />
                </FormControl>

                <DeleteIcon style={{marginBottom: "10px", marginLeft: "10px"}} />
            </div>

            <div className={'list_spec'}>
                <img style={{marginTop: "24px"}} src={Comp1} alt='Comp1'/>

                <FormControl sx={{marginLeft: '10px'}} variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input">
                        Sound
                    </InputLabel>
                    <BootstrapInput defaultValue="Звукорежессер" id="bootstrap-input" />
                </FormControl>

                <FormControl sx={{marginLeft: '5px', width: '35px' }} variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input" />
                    <BootstrapInput defaultValue="1" id="bootstrap-input" />
                </FormControl>

                <DeleteIcon style={{marginBottom: "10px", marginLeft: "10px"}} />
            </div>

            <MyButton onClick={addNewProject}>Создать проект</MyButton>
        </form>
    );
};

export default ProjectForm;