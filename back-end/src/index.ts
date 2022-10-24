import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import configMongo from './configMongo';
import mongoose from 'mongoose';
import dishRoute from './route/DishRoute';
import orderRoute from './route/OrderRoute';
import userRoute from './route/UserRoute';
import path from 'path';
import bodyParser from 'body-parser';

class Server {
	public app : Application;
	public portNumber! : number;
	constructor() {
		this.app = express();
		dotenv.config();
		this.portNumber = parseInt(process.env.portApplication!);
		this.config();
		this.routes();
	}

	public config(): void {
		this.app.set('port', this.portNumber);
		this.app.use(morgan('dev'));
		this.app.use(bodyParser.json());
		this.app.use(express.json());
		this.app.use(express.urlencoded({extended : false}));
		this.app.use(cors());
		this.app.use('/images', express.static(path.join('images')));
		mongoose.connect(configMongo.mongo.url, configMongo.mongo.options)
			.then(res => {
				console.log("mongodb is connected");
			})
			.catch(err => {
				console.log("mongodb is not connected", err);
			});
	}

	public routes(): void {
		this.app.use('/dish', dishRoute);
		this.app.use('/order', orderRoute);
		this.app.use('/user', userRoute);
	}

	public start(): void {
		let serve = this.app.listen(this.app.get('port'), ()  => {
			console.log('Serveur sur le port '+this.app.get('port'));
		});
	}
}

const server = new Server();
server.start();


