---
title: Ubuntu网络基本常识
date: 2020-09-26 15:43:33
tags: ubuntu网络
toc: true
cover: ./img/ubuntu.jpg
---
## __基本命令__

* <font color="#DC461D"><b>ifconfig</b></font>  查看ubuntu网络信息
* <font color="#DC461D"><b>ifconfig</b><i>网卡名</i></font> 查看网卡信息
* <font color="#DC461D"><b>sudo ifconfig up/down</b></font> 激活或禁用网卡
* <font color="#DC461D"><b>sudo /etc/networking star/stop</b></font> 启用或禁用网络
<!--more-->

## __Ubuntu18.04设置静态ip和动态ip方法__

### __新旧版本对比__
* 之前Ubuntu16.04版本里的网卡配置文件 /etc/network/interfaces  不起作用了，改成了netplan方式。

### __什么是netplan__
* netplan官网说它是一个在Linux系统中简单方便配置网络的程序，使用YAML格式的文件进行配置。

### __netplan工作方式__
* netplan 从配置文件 `/etc/netplan/*.yaml` 读取网络配置，启动后 netplan 在 `/run` 目录中生成特定网卡名称后缀的配置文件，然后将网卡设备的控制权移交给特定的网络守护程序。

### __查看网卡用netplan配置信息__
```
root@leeho:~# networkctl status ens160
● 2: ens160
       Link File: /lib/systemd/network/99-default.link
    Network File: /run/systemd/network/10-netplan-ens160.network
            Type: ether
           State: routable (configured)
            Path: pci-0000:03:00.0
          Driver: vmxnet3
          Vendor: VMware
           Model: VMXNET3 Ethernet Controller
      HW Address: 00:0c:29:04:52:18 (VMware, Inc.)
         Address: 192.168.10.4
                  fdb3:3ac8:f5cf::a36
                  fdb3:3ac8:f5cf:0:20c:29ff:fe04:5218
                  fe80::20c:29ff:fe04:5218
         Gateway: 192.168.10.3 (VMware, Inc.)
                  fe80::20c:29ff:fe86:36cf (VMware, Inc.)
             DNS: 192.168.10.3
                  223.5.5.5
                  fdb3:3ac8:f5cf::1
```
### __如何使用netplan__
* 配置文件：`/etc/netplan/*.yaml`
* 命令：`netplan apply`
* 每个网卡都需要在 `/etc/netplan` 目录中设置配置文件，在配置中指定网卡ip信息，使用DHCP或者静态ip方式。`/etc/netplan/` 目录下的配置文件，扩展名为.yaml（例如 `/etc/netplan/config.yaml`），然后运行 netplan apply 此命令分析配置信息并将其应用生效。配置文档示例：
```
#网卡eth0使用dhcp方式配置ip网络，配置如下。yaml配置是用空格作为缩进对齐，不能使用tab键。
network:
  version: 2
  renderer: networkd
  ethernets:
    eth0:
      dhcp4: yes
      dhcp6: no
#网卡eth0使用静态ip方式，用关键字addresses指定ip地址和子网掩码（支持ipv4和ivp6），gateway4指定网关ip，nameservers 指定DNS。
network:
  version: 2
  renderer: networkd
  ethernets:
    eth0:
      addresses:
      - 10.10.10.2/24
      gateway4: 10.10.10.1
      nameservers:
          search: [mydomain, otherdomain]
          addresses: [10.10.10.1, 1.1.1.1]
```
配置文件里的关键字说明：
`renderer`：指定后端网络服务，支持networkd（Systemd-networkd） 和 Network,Manager两种，默认是networkd。
`ethernets`：指定是以太网配置，其他的还包括 wifis 或者 bridges
`eth0`：以太网网卡名称
`dhcp4`：开启使用ipv4的DHCP，默认是关闭。
`dhcp6`：开启使用ipv6的DHCP，默认是关闭。
`addresses`：对应网卡配置的静态ip地址，是ip/掩码的格式，支持ipv6地址，例如 addresses: [192.168.14.2/24, "2001:1::1/64"]
`gateway4, gateway6`：指定IPv4/6默认网关，使用静态ip配置时使用。例如IPv4: gateway4: 172.16.0.1 例如IPv6: gateway6: "2001:4::1"
`nameservers`：设置DNS服务器和搜索域。有两个受支持的字段：addresses:是DNS地址列表，search:是搜索域列表,没有特殊需要可以不配置search这项。

资源来源:https://developer.aliyun.com/article/744737


