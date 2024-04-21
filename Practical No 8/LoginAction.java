// LoginAction.java

package com.example;

import com.opensymphony.xwork2.ActionSupport;

public class LoginAction extends ActionSupport {
    private String name;
    private String mobile;
    private String email;

    // Getters and setters for the form fields

    public String execute() {
        // Server-side validation can be implemented here
        // For simplicity, assuming validation passed
        return SUCCESS;
    }
}
