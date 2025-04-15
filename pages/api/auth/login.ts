// Code pour les imports : ---------------------------------------------//
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client"; 
import bcrypt from "bcryptjs"; 
import jwt from "jsonwebtoken"; 
import * as cookie from "cookie"; 