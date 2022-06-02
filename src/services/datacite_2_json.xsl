<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns:array="http://www.w3.org/2005/xpath-functions/array"
                xmlns:map="http://www.w3.org/2005/xpath-functions/map"
                xmlns:math="http://www.w3.org/2005/xpath-functions/math"              
                expand-text="yes"
                version="3.0">
     <!-- exclude-result-prefixes="#all"  -->
     
     <xsl:output method="text" indent="yes"/>
     <xsl:mode on-no-match="shallow-copy"/>
     
     <!-- <xsl:variable name="datacite-titles" select="//*[name() = 'titles']"/> -->
     <xsl:variable name="datacite-records" select="//*[name() = 'resource']"/>
     
     <xsl:template match="/*" mode="#all">
          <!-- <xsl:copy>
               <xsl:apply-templates select="@*, node()" mode="#current"/>
               </xsl:copy> -->
          
          <!-- <xsl:for-each select="$datacite-records/*[name() = 'record']">  -->
          <xsl:for-each select="$datacite-records">                
               <!-- definbe variables -->
               <xsl:variable name="identifier" select="*[name() = 'identifier']"/>
               <xsl:variable name="datacite-titles" select="*[name() = 'titles']"/>
               <xsl:variable name="main_title">
                    <xsl:for-each select="$datacite-titles/*[name() = 'title']">
                         <xsl:choose>
                              <xsl:when test="not(count(@titleType) &gt; 0)">
                                   <xsl:value-of select="."/>
                              </xsl:when>                        
                         </xsl:choose>
                    </xsl:for-each>
               </xsl:variable>  
                <!-- <xsl:value-of select="*[name() = 'identifier']"/>    -->               
               {{                       
               "doi": "{$identifier}",
               "title": "{$main_title}"
               }},       
          </xsl:for-each>  
          
          <!-- <xsl:apply-templates select="//*[name() = 'resource']" /> -->
          
          <!-- <xsl:value-of select="$datacite-titles" separator="&#x20;"/> -->
          
     </xsl:template>
     
     <!-- <xsl:template match="metadata/resource/identifier">
          
          <xsl:value-of select="."/>
          
          </xsl:template> -->
     <xsl:template match="//*[name() = 'resource']">
          <xsl:apply-templates select="identifier" />
     </xsl:template>
     
     <xsl:template match="identifier" >
          <xsl:text>test</xsl:text>
          <!-- <xsl:value-of select="@identifierType" /> 
               <xsl:value-of select="string(.)"/>        -->
     </xsl:template>
     
</xsl:stylesheet>