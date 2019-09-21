import doctor from './routes/doctor';
import user from './routes/user';
const router = (app) => {
	app.use(doctor);
	app.use(user);
};

export default router;
