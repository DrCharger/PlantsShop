import Grid from "@mui/material/Grid";
import { items } from "../../../../data/items";
import ContentItem from "./ContentItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const Content = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const indexOfLastItem = currentPage * postsPerPage;
  const indexOfFirstItem = indexOfLastItem - postsPerPage;
  const currentItem = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <Stack spacing={2} sx={{ margin: "10px 0" }}>
        <Pagination
          count={Math.ceil(items.length / postsPerPage)}
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
