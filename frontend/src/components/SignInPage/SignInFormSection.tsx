import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useEffect, useState } from "react";

export default function SignInFormSection
(
    { email, setEmail, password, setPassword }:
    { email: string, setEmail: (value:  string) => void, password: string, setPassword: (value: string) => void }
) 
{

    return (
        <div>
            <div>
                <Label htmlFor="email">
                    E-mail
                </Label>
                <Input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onClick={() => null}
                    className=""
                />
            </div>
            <div>
                <Label htmlFor="password">
                    Password
                </Label>
                <Input
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onClick={() => null}
                    className=""
                />
            </div>
        </div>
    );
}