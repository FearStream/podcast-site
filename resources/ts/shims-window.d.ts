import { AxiosInstance } from "axios";
import { Router } from "ziggy-js";

declare global {
	interface Window {
		axios: AxiosInstance
	}

	function route(): Router;
}
