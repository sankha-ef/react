import { useGetAllGroupsQuery } from "../redux/api/groupQueries";
import { Grid } from "@mui/material";

const Dashboard = () => {
  const { isLoading, data } = useGetAllGroupsQuery();
  return (
    <Grid item sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "100%"}}>
      <h2 style={{ }}>
        Dashboard
      </h2>
      {/* {isLoading ? <div>Loading...</div> : <div>{JSON.stringify(data)}</div>} */}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data?.data.map((group) => (
            <div key={group.id}>{group.name}</div>
          ))}
        </div>
      )}
    </Grid>
  );
};

export default Dashboard;
