import { Box, FormGroup, Stack } from "@mui/material";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CustomCheckbox, CustomTextField } from "../../../../components";
import { RootState } from "../../../../redux/store";

const tags = [
  {
    label: "All",
    value: "All",
    count: "18",
  },
  {
    label: "Beach",
    value: "Beach",
    count: "5",
  },
  {
    label: "People",
    value: "People",
    count: "18",
  },
  {
    label: "Bicycle",
    value: "Bicycle",
    count: "1",
  },
];

interface TagControlsProps {
  onChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

function TagControls(props: TagControlsProps) {
  const { onChange } = props;
  const [displayedTag, setDisplayedTags] = useState(tags);
  const [search, setSearch] = useState("");
  const { totalItemCount } = useSelector((state: RootState) => state.product);

  const filterTagsBySearchQuery = useCallback(
    (value) =>
      setDisplayedTags(
        tags.filter((tag) =>
          tag.label.toLowerCase().includes(value.toLowerCase())
        )
      ),
    []
  );

  const handleSearchBoxChange = (e: any) => {
    const { value } = e.target;
    setSearch(value);
    filterTagsBySearchQuery(value);
  };

  useEffect(() => {
    filterTagsBySearchQuery(search);
  }, [filterTagsBySearchQuery, search]);

  return (
    <Stack>
      <Box
        padding={{ xs: "16px", lg: "24px 24px 10px 24px" }}
        paddingBottom={{ xs: "0" }}
      >
        <CustomTextField
          placeholder="Search tag"
          onChange={handleSearchBoxChange}
          value={search}
        />
      </Box>
      <FormGroup defaultChecked sx={{ paddingRight: "24px" }}>
        <Stack
          spacing={"18px"}
          height={{ lg: "142px" }}
          sx={{ overflowY: "auto", overscrollBehavior: "contain" }}
          padding={{ xs: "16px", lg: "7px 0 24px 24px" }}
        >
          {displayedTag.map(({ label, value }, i: number) => (
            <CustomCheckbox
              key={value}
              name="tags"
              label={label}
              extraText={label === "All" ? `(${totalItemCount})` : ""}
              onChange={onChange}
              value={value}
              defaultChecked={i === 0}
            />
          ))}
        </Stack>
      </FormGroup>
    </Stack>
  );
}

export default TagControls;
