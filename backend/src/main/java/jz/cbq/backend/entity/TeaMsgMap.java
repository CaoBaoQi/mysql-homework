package jz.cbq.backend.entity;

import lombok.Data;

import java.util.Date;

@Data
public class TeaMsgMap {
    private static final long serialVersionUID = 1L;

    private String msgId;

    private String stuId;

    private String teaId;

    private String stuName;

    private String msgContent;

    private Date msgTime;
}
