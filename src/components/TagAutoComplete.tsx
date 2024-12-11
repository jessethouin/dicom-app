import * as React from "react";
import Autocomplete, {autocompleteClasses} from "@mui/material/Autocomplete";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import {useTheme} from "@mui/material";
import {tags} from "../utils/dicomTags";
import {DICOMTag, TagResponse} from "../utils/types";
import {BLUE_500} from "../utils/constants";

interface TagAutocompleteProps {
    setTagValue: (value: (((prevState: string) => string) | string)) => void,
    fileName?: string
}

export default function TagAutocomplete({setTagValue, fileName}: TagAutocompleteProps) {
    const theme = useTheme();

    const parseDICOMTag = (tag: string) => {
        const group = tag.substring(1, 5).toLowerCase();
        const element = tag.substring(6, 10).toLowerCase();
        return { group, element };
    }

    const handleChange = async (event: React.SyntheticEvent, value: DICOMTag | DICOMTag[], reason: string) => {
        const val = value as DICOMTag;
        const {group, element} = parseDICOMTag(val.Tag);

        const resp = await fetch(`${process.env.REACT_APP_API_SERVER_PROTOCOL}://${process.env.REACT_APP_API_SERVER_NAME}:${process.env.REACT_APP_API_SERVER_PORT}/tag/fileName/${fileName}/group/${group}/element/${element}`, {method: "GET"});
        const obj: TagResponse = await resp.json();

        if (!resp.ok) {
            setTagValue(obj.error ?? "An unknown error occurred.");
            return;
        }

        if (obj.tag instanceof Array) {
            setTagValue(obj.tag[0]);
        } else {
            setTagValue(obj.tag ?? "No value set for that tag");
        }
    }

    return (
        <Autocomplete
            sx={{
                height: "100%",
                paddingBottom: "10px",
                [`& .${autocompleteClasses.inputRoot}`]: {
                    ...theme.typography.body2,
                    padding: "1px 0",
                    height: "100%",
                    backgroundColor: BLUE_500,
                    color: "white",
                    borderRadius: 1,
                    "& input": {
                        padding: "10px 16px",
                        height: "100%",
                    },
                },
            }}
            onChange={handleChange}
            options={tags}
            getOptionLabel={(option) => `${option.Tag} - ${option.Name}`}
            getOptionKey={(option) => option.Tag}
            autoHighlight
            fullWidth
            disableClearable
            multiple={false}
            renderOption={(optionProps, option) => (
                <Box
                    component="li"
                    {...optionProps}
                    key={option.Tag}
                >
                    {option.Tag} - {option.Name}
                </Box>
            )}
            renderInput={(params) => (
                <InputBase
                    autoFocus
                    fullWidth
                    id={params.id}
                    inputProps={{
                        ...params.inputProps,
                    }}
                    {...params.InputProps}
                />
            )}
        />
    );
}