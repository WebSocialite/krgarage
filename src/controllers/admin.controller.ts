
import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const memberService = new MemberService();

const adminController: T = {};

adminController.goHome = (req: Request, res: Response ) => {
    try {
        console.log("goHome");
    
        res.render("home");
    }catch (err) {
        console.log("Error, goHome:", err );
    }
};

adminController.getLogin = (req: Request, res: Response ) => {
    try {
        console.log("getLogin");
        res.render("login");
    }catch (err) {
        console.log("Error, getLogin:", err );
    }
};

adminController.getSignup = (req: Request, res: Response ) => {
    try {
        console.log("getSignup");
        res.render("signup");
    }catch (err) {
        console.log("Error, getSignup:", err );
    }    
};

adminController.processSignup = async (req: Request, res: Response ) => {
    try {
        console.log("processSignup");

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.ADMIN;
        const result = await memberService.processSignup(newMember);
        res.send(result);
    } catch (err) {
        console.log("Error, processSignup:", err );
        res.send(err);
    }    
};
adminController.processLogin = async (req: Request, res: Response ) => {
    try {
        console.log("processLogin");
        const input: LoginInput =req.body,
        result = await memberService.processLogin(input);
        
        res.send(result);
    }catch (err) {
        console.log("Error, processLogin:", err );
        res.send(err);
    }    
};



export default adminController;
