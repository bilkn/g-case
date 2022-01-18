import { FormControl, FormGroup, RadioGroup, Stack } from "@mui/material";
import { Form, Formik } from "formik";
import { CustomRadio } from "../../../../components";

const sorting = [
  {
    label: "Price low to high",
    value: "0",
  },
  {
    label: "Price high to low",
    value: "1",
  },
  {
    label: "New to old",
    value: "2",
  },
  {
    label: "Old to new",
    value: "3",
  },
];

function SortingControls() {
  const handleSubmit = (value: { orderBy: string }) =>
    console.log("value", value);

  return (
    <FormGroup>
      <Formik
        initialValues={{
          orderBy: "lowToHigh",
        }}
        onSubmit={handleSubmit}
      >
        {({ handleChange }) => (
          <Form>
            <FormControl>
              <RadioGroup
                onChange={(e) => {
                  const { value } = e.target;
                  handleChange(e);
                  handleSubmit({ orderBy: value });
                }}
              >
                <Stack spacing={"18px"} padding={{ xs: "16px", lg: "24px" }}>
                  {sorting.map(({ label, value }) => (
                    <CustomRadio name="orderBy" label={label} value={value} />
                  ))}
                </Stack>
              </RadioGroup>
            </FormControl>
          </Form>
        )}
      </Formik>
    </FormGroup>
  );
}

export default SortingControls;
