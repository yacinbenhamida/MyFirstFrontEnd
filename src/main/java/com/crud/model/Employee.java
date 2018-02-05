package com.crud.model;

import javax.persistence.Entity;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name="employee")
public class Employee implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id @Column(name="id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "USER_SEQ")
	@SequenceGenerator(sequenceName = "user_seq ", allocationSize = 1, name = "USER_SEQ")
private int id;
	@Column(name="nom")
private String nom;
	@Column(name="prenom")
private String prenom;
	@Column(name="nomar")
private String nomar;
	@Column(name="prenomar")
private String prenomar;
	@Column(name="grade")
private String grade;
	@Column(name="fonction")
private String fonction;
	@Column(name="date_naiss")
private String dateNaiss;
	@Column(name="structure")
private String structure;
	@Column(name="cin")
private String cin;
	@Column(name="cnrps")
private String cnrps;

public Employee() {}
public Employee(int id, String nom, String prenom,String nomar,String prenomar ,String grade, String fonction, String dateNaiss, String structure,
		String cIN,String cnrps) {
	super();
	this.id = id;
	this.nom = nom;
	this.prenom = prenom;
	this.nomar = nomar;
	this.prenomar = prenomar;
	this.grade = grade;
	this.fonction = fonction;
	this.dateNaiss = dateNaiss;
	this.structure = structure;
	cin = cIN;
	this.cnrps = cnrps;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getNom() {
	return nom;
}
public void setNom(String name) {
	this.nom = name;
}
public String getPrenom() {
	return prenom;
}
public void setPrenom(String prenom) {
	this.prenom = prenom;
}
public String getGrade() {
	return grade;
}
public void setGrade(String grade) {
	this.grade = grade;
}
public String getFonction() {
	return fonction;
}
public void setFonction(String fonction) {
	this.fonction = fonction;
}
public String getDateNaiss() {
	return dateNaiss;
}
public void setDateNaiss(String dateNaiss) {
	this.dateNaiss = dateNaiss;
}
public String getStructure() {
	return structure;
}
public void setStructure(String structure) {
	this.structure = structure;
}

public String getCin() {
	return cin;
}
public void setCin(String cin) {
	this.cin = cin;
}
public String getNomar() {
	return nomar;
}
public void setNomar(String nomar) {
	this.nomar = nomar;
}
public String getPrenomar() {
	return prenomar;
}
public void setPrenomar(String prenomar) {
	this.prenomar = prenomar;
}
public String getCnrps() {
	return cnrps;
}
public void setCnrps(String cnrps) {
	this.cnrps = cnrps;
}
@Override
public String toString() {
	return "Employee [id=" + id + ", nom=" + nom + ", prenom=" + prenom + ", nomar=" + nomar + ", prenomar=" + prenomar
			+ ", grade=" + grade + ", fonction=" + fonction + ", dateNaiss=" + dateNaiss + ", structure=" + structure
			+ ", cin=" + cin + ", cnrps=" + cnrps + "]";
}



}
