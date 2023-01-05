import Grid from "@mui/material/Grid";
import ContentItem from "./ContentItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { ContentPropsType } from "../../../../types/propTypes";

const Content: React.FC<ContentPropsType> = ({ info, perPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(perPage);

  const indexOfLastItem = currentPage * postsPerPage;
  const indexOfFirstItem = indexOfLastItem - postsPerPage;
  const currentItem = info.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <Stack spacing={2} sx={{ margin: "10px 0" }}>
        <Pagination
          count={Math.ceil(info.length / postsPerPage)}
          shape="rounded"
          page={currentPage}
          onChange={(e, value) => setCurrentPage(value)}
        />{" "}
      </Stack>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        sx={{ marginBottom: "120px" }}
      >
        {currentItem.map((el) => (
          <Grid item xs={6} key={el.id}>
            <ContentItem el={el} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Content;
