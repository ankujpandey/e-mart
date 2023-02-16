import { Alert, Stack } from "@mui/material";
import React from "react";

export const MuiAlert = () => {
	return (
		<Stack spacing={2}>
			<Alert icon={false} severity="success">
				This is a success alert — check it out!
			</Alert>
		</Stack>
	);
};
