import mongoose from "mongoose";

// Static factory pattern / Singleton
export class Database {
  static _instance = new Database();

  static database: typeof mongoose;

  static instance() {
    if (!this._instance) {
      this._instance = new Database();
    }

    return this._instance;
  }

  async connect() {
    try {
      Database.database = await mongoose.connect(process.env.MONGO_URI as string);

      if (this.isConnected()) {
        console.log('Connected to MONGO DB');
      }

      Database.database.connection.on('error', () => {
        console.log('Could not connect to the database. Exiting now...');
        process.exit();
      });
    } catch (error) {
      console.log(`Error on MONGO DB connect ${error}`)
    }
  }

  isConnected() {
    return Database.database.connection.readyState === 1;
  }
}