import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

interface MultipleSelectChipProps {
    readonly id: string;
    readonly label: string;
    readonly options: string[];
    readonly values: string[];
    readonly onChange: (value: string[]) => void;
}

export const MultipleSelectChip = (props: MultipleSelectChipProps) => {
    const {options, values, onChange, label, id} = props;
    const theme = useTheme();

    const handleChange = (event: SelectChangeEvent<typeof options>) => {
        const {
            target: { value },
        } = event;
        onChange(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{width: 300 }}>
                <InputLabel id={id + "-label"}>{label}</InputLabel>
                <Select
                    labelId={id + "-label"}
                    id={id}
                    multiple
                    value={values}
                    onChange={handleChange}
                    input={<OutlinedInput id={id + "-label"} label={label} />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {options.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, values, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}