package com.pinyougou.sellergoods.service;

import com.entity.PageResult;
import com.pinyougou.pojo.TbBrand;

import java.util.List;

public interface BrandService {

    public List<TbBrand> findAll();

    /**
     * 分页
     * @param pageNum
     * @param pageSize
     * @return
     */
    public PageResult findPage(int pageNum, int pageSize);

    public void add(TbBrand tbBrand);

    TbBrand findOne(Long id);

    void update(TbBrand tbBrand);

    void delete(Long[] ids);

    public PageResult findPage(TbBrand tbBrand,int pageNum, int pageSize);
}
